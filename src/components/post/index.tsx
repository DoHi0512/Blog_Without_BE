import { useRecoilState } from "recoil";
import { ThemeState } from "../../pages/_app";
import { PostType } from "../../type/post";
import * as S from "./style";

export default function Post({
  content,
  date,
  title,
  image,
  preview,
  tag,
}: PostType) {
  const tags = tag?.map((data, key) => {
    return (
      <S.Tag key={key}>
        <span>{data}</span>
      </S.Tag>
    );
  });
  const [theme, setTheme] = useRecoilState(ThemeState);
  return (
    <S.Post text={theme.text} background={theme.background}>
      <S.Img src={image}></S.Img>
      <S.Title>{title}</S.Title>
      <S.Preview>{preview}</S.Preview>
      <S.Info>
        <S.TagBox>{tags}</S.TagBox>
        <S.Date>{date}</S.Date>
      </S.Info>
    </S.Post>
  );
}
