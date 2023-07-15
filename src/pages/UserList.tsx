import { AUTH_SERVER_URL } from "@/config";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Component, ComponentProps, Resource, Suspense, createResource } from "solid-js";

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

const fetchUserList = async () =>
  (
    await fetch(`${AUTH_SERVER_URL}/api/admin/users`, {
      method: "GET",
      credentials: "include"
    })
  ).json();

type UserListTableProps = {
  userList: Resource<UserData[]>;
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
                {props.userList()?.map(user => (
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
  const [userList, { refetch }] = createResource<UserData[]>(fetchUserList);

  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <UserListTable userList={userList} />
      </Suspense>
    </DashboardLayout>
  );
};

export default UserList;
