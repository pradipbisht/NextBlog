"use client";

import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function DashUsers() {
  const { user, isLoaded } = useUser();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!user?.publicMetadata?.userMongoId) {
          throw new Error("User Mongo ID is missing");
        }
        const res = await fetch("/api/user/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userMongoId: user.publicMetadata.userMongoId,
          }),
        });

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        const data = await res.json();
        if (!data || !data.users) {
          throw new Error("Invalid response format");
        }

        setUsers(data.users);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      }
    };

    if (user?.publicMetadata?.isAdmin) {
      fetchUsers();
    }
  }, [user?.publicMetadata?.isAdmin, user?.publicMetadata?.userMongoId]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (!user?.publicMetadata?.isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full py-7">
        <h1 className="text-2xl font-semibold">You are not an admin!</h1>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3">
      {users.length > 0 ? (
        <Table hoverable className="shadow-md">
          <Table.Head>
            <Table.HeadCell>Date created</Table.HeadCell>
            <Table.HeadCell>User image</Table.HeadCell>
            <Table.HeadCell>Username</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Admin</Table.HeadCell>
          </Table.Head>
          {users.map((user) => (
            <Table.Body className="divide-y" key={user._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  {new Date(user.createdAt).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>
                  <Image
                    src={user.profilePicture}
                    alt={user.username || "User"}
                    className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                  />
                </Table.Cell>
                <Table.Cell>{user.username || "Unknown"}</Table.Cell>
                <Table.Cell>{user.email || "Unknown"}</Table.Cell>
                <Table.Cell>
                  {user.isAdmin ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      ) : (
        <p>No users found!</p>
      )}
    </div>
  );
}
