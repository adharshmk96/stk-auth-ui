import DashboardLayout from "@/layouts/DashboardLayout";
import { Component, ComponentProps, Resource, Suspense, createResource } from "solid-js";

interface UserListProps extends ComponentProps<any> {
  // add props here
}

type UserData = {
  id: number;
  name: string;
};

const fetchUserList = async () => {
  // sleep for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "John Smith" }
  ];
};

type UserListTableProps = {
  userList: Resource<UserData[]>;
};

const UserListTable: Component<UserListTableProps> = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.userList()?.map(user => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
