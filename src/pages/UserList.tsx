import { AUTH_SERVER_URL } from "@/config";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Component, ComponentProps, Resource, Suspense, createResource } from "solid-js";

interface UserListProps extends ComponentProps<any> {
  // add props here
}

type UserData = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

// const fetchUserList = async () => {
//     await fetch(`${AUTH_SERVER_URL}/api/admin/users`, {
//         method: "GET",
//         credentials: "include"
//     }).json();
  
// };

const fetchUserList = async () => (
    await fetch(`${AUTH_SERVER_URL}/api/admin/users`, {
            method: "GET",
            credentials: "include"
        })).json();

        
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
