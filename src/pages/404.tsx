import { Title } from "../components";
import { Layout } from "../layout";

export function Error404(): JSX.Element {
  return (
    <Layout>
      <div className="not-found">
        <Title as="h1" text="404" className="not-found-title" />
        <p>Страница не найдена</p>
      </div>
    </Layout>
  );
}

export default Error404;