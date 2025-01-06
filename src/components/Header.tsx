"use client";

import NextLink from "next/link";
import { styled } from "styled-components";
import { useAtom } from "jotai";
import { Link } from "react-scroll";

import { getMediaQueryCSS } from "@/common/util";
import { Lang, langAtom } from "@/store/langStore";
import { Colors } from "@/common/constant";

const Header = () => {
  const [lang, setLang] = useAtom(langAtom);

  return (
    <Wrap>
      <div className="flex items-center gap-[2px]">
        <NextLink href="/">
          <LogoImg src="/logo_header.png" alt="로고" />
        </NextLink>
      </div>

      <MenuContainer>
        <Link to="about_us" smooth={true} duration={500}>
          <MenuText>About Us</MenuText>
        </Link>

        <Link to="technology" smooth={true} duration={500}>
          <MenuText>Technology</MenuText>
        </Link>

        <Link to="token" smooth={true} duration={500}>
          <MenuText>Token</MenuText>
        </Link>

        <Link to="roadmap" smooth={true} duration={500}>
          <MenuText>Roadmap</MenuText>
        </Link>

        <Link to="contact" smooth={true} duration={500}>
          <MenuText>Contact</MenuText>
        </Link>
      </MenuContainer>

      {/* <div className="flex gap-1">
        <Switch $selected={lang === Lang.KOR} onClick={() => setLang(Lang.KOR)}>
          KR
        </Switch>
        <Switch $selected={lang === Lang.ENG} onClick={() => setLang(Lang.ENG)}>
          EN
        </Switch>
      </div> */}
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  position: fixed;

  top: 0px;
  width: 100%;
  height: 74px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 0 200px;

  border: 1px solid black;
  background-color: ${Colors.White};

  @media screen and (max-width: 1024px) {
    /* top: 10px;
    left: 0;
    width: 100%;
    height: 32px;

    padding: 0 20px; */
  }
`;

const LogoImg = styled.img`
  width: 200px;
  height: 35px;

  @media screen and (max-width: 1024px) {
    /* width: 22px;
    height: 17.286px; */
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.91vw;

  ${getMediaQueryCSS(`
    display: none;
    `)}
`;

const MenuText = styled.span`
  color: #000;
  font-feature-settings: "liga" off, "clig" off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */

  cursor: pointer;
`;

const Switch = styled.div<{ $selected: boolean }>`
  width: 80px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fff;

  text-align: center;
  font-family: Pretendard;
  font-size: 0.83vw;
  font-style: normal;
  font-weight: 400;

  border-radius: 999px;
  background: ${({ $selected }) => ($selected ? "#1855be" : "none")};
  border: ${({ $selected }) => ($selected ? "none" : "1px solid #fff")};
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    height: 32px;
    width: 50px;
    font-size: 14px;
  }
`;
