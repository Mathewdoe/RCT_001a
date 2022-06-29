import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error('error');
  }
  return data;
};

export default function Customer() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/customers/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Cell Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.surname}</td>
          <td>{data.cellNumber}</td>
          <td>{data.action}</td>
        </tr>
      </tbody>
    </table>

  




  );
}
