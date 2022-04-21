import { useContext } from "react"
import { useCallback, useState } from "react"
import { SelectedUserContext } from "../../context/SelectedUserProvider"

type Props = {
  user: User
}

export default function UserProfile ({ user }: Props) {
  const [isOnEdit, setIsOnEdit] = useState(false);
  const { cancel } = useContext(SelectedUserContext);

  const toggleIsOnEdit = useCallback(() => {
    setIsOnEdit((state) => !state)
  }, [])

  return (
    <>
      <Header>
        <h2>Профиль пользователя</h2>
        <Button action={toggleIsOnEdit}>Редактировать</Button>
      </Header>
      <UserForm inititalState={user} cancel={cancel} />
    </section>
  )
}