interface BlogPostProps {
  url: string;
  title: string;
}

export function BlogPost({ url, title }: BlogPostProps) {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
}
