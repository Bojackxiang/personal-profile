import { cn } from "@/lib/utils";
import { ClassValue } from "class-variance-authority/types";

interface ContainerProps {
  children: React.ReactNode;
  classNames?: ClassValue;
}

const Container: React.FC<ContainerProps> = ({
  children,
  classNames
}) => {
  return (
    <div className={cn("mx-auto ", classNames)}>
      {children}
    </div>
  );
};

export default Container;
