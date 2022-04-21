export default function UsersList() {
  return (
    <section>
      <Header>
        <h2>Список пользователей</h2>
      </Header>
      <ul>
        {users?.map((user) => (
          <UserPreview {...user} />
        ))}
      </ul>
    </section>
  );
}
