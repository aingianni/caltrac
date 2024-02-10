import GetBmrForm from "../../components/GetBmrForm/GetBmrForm"

export default function DashBoardPage ({ user, setUser }) {

    return (
      <main>
        <h1>This is the User Dashboard</h1>
        <GetBmrForm user={user} setUser={setUser} />
      </main>
    )
  }