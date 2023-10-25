import { useRouter } from "next/router";

const IdPost = () => {
  const {query:{id}} = useRouter();
  return (
    <div>Id post {id}</div>
  )
}

export default IdPost;