import Link from "next/link";
import tw from "tailwind.macro";
import styled from "styled-components";

const StyledLink = styled.a`
  ${tw`bg-red-500 text-red-200 py-4 px-8 inline-block hover:cursor-pointer`};
`;

function Index() {
  return (
    <main>
      <section>
        <Link href="/">
          <StyledLink>tailwind</StyledLink>
        </Link>
      </section>
    </main>
  );
}

export default Index;
