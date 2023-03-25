import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, isLoading, userDataToForm, deleteUser, visibleForm }) => {
  return (
    <section>
      <div className="flex flex-wrap justify-center items-center p-10 text-white">
        {isLoading ? (
          <p> Loading users... </p>
        ) : (
          users.map((user) => (
            <UserCard
              user={user}
              key={user.id}
              userDataToForm={userDataToForm}
              deleteUser={deleteUser}
              visibleForm={visibleForm}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default UserList;
