import Article from "../../components/Article";

type Props = {
  params: {
    id: string;
  };
};
export default function Index({ params }: Props) {
  return (
    <main>
      <Article params={params} />
    </main>
  );
}
