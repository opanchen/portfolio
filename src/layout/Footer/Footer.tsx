import { TryzubIcon } from "@components/ui/TryzubIcon";
import Container from "@components/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="py-[16px]">
      <Container>
        <div className="w-full flex justify-center">
          <TryzubIcon />
        </div>
      </Container>
    </footer>
  );
};
