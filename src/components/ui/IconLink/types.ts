type LinkLiteral =
  | "demo"
  | "gh"
  | "download"
  | "linkedIn"
  | "email"
  | "telegram";

export type IconLinkProps = {
  type: LinkLiteral | string;
  href: string;
  size?: number;
  location?: string;
};

export type Icon = {
  type: LinkLiteral | string;
  size?: number;
};
