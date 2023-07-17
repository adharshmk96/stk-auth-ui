// lib
import { Component, ComponentProps, Resource, Suspense, createEffect, createResource, createSignal } from "solid-js";

// layout
import DashboardLayout from "@/layouts/DashboardLayout";

// config
import { apiUrls } from "@/constants";
import { Button } from "@kobalte/core";
import { Icon } from "@iconify-icon/solid";

interface UserListProps extends ComponentProps<any> {
  // add props here
}

type UserData = {
  id: number;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
};

const fetchUserList = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;
  return (
    await fetch(`${apiUrls.users}?limit=${limit}&offset=${offset}`, {
      method: "GET",
      credentials: "include"
    })
  ).json();
};

type UserListTableProps = {
  userList: Resource<{
    total: number;
    data: UserData[];
  }>;
};

const UserListTable: Component<UserListTableProps> = props => {
  return (
    <div class="overflow-x-auto scroll-m-2">
      <div class="flex items-center justify-center font-sans">
        <div class="w-full my-5">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">id</th>
                <th class="py-3 px-6 text-left">username</th>
                <th class="py-3 px-6 text-center">email</th>
                <th class="py-3 px-6 text-right">created</th>
                <th class="py-3 px-6 text-right">updated</th>
              </tr>
            </thead>
            <tbody class="text-sm font-light">
              {props.userList()?.data.map(user => (
                <tr class="border-b border-gray-200 ">
                  <td class="py-3 px-6 text-left whitespace-nowrap">{user.id}</td>
                  <td class="py-3 px-6 text-left">{user.username}</td>
                  <td class="py-3 px-6 text-center">{user.email}</td>
                  <td class="py-3 px-6 text-right">{user.created_at}</td>
                  <td class="py-3 px-6 text-right">{user.updated_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const UserList: Component<UserListProps> = () => {
  const [state, setState] = createSignal({ page: 1, limit: 5 });
  const [userList, { refetch }] = createResource(() => fetchUserList(state().page, state().limit));

  createEffect(() => {
    state();
    refetch();
  });

  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <UserListTable userList={userList} />
        <div class="p-5 flex items-center justify-between">
          <Button.Root class="btn btn-secondary" onClick={() => setState({ ...state(), page: state().page - 1 })} disabled={state().page === 1}>
            <Icon icon="ph:arrow-left" class="text-2xl" />
          </Button.Root>
          <Button.Root
            class="btn btn-secondary"
            onClick={() => setState({ ...state(), page: state().page + 1 })}
            disabled={state().page * state().limit >= userList()?.total}
          >
            <Icon icon="ph:arrow-right" class="text-2xl" />
          </Button.Root>
        </div>

        <p>
          Showing {(state().page - 1) * state().limit + 1} - {Math.min(state().page * state().limit, userList()?.total)} of {userList()?.total} users
        </p>
      </Suspense>
    </DashboardLayout>
  );
};

export default UserList;
