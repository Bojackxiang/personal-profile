import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  classNames?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  classNames
}) => {
  return (
    <div className={cn("mx-auto max-w-7xl", classNames)}>
      {children}
    </div>
  );
};

export default Container;
