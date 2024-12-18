import LikeButton from "./LikeButton";

function Header({ title }) {
  return <h1>{title ? title : "default title"}</h1>
}

function HomePage() {
  const names = ['vignesh', 'iyer'];

  return (
    <div>
      <Header title="develop and grow" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <LikeButton />
    </div>
  )
}

export default HomePage;
