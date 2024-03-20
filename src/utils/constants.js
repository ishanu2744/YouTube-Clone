import React from "react";

import { AiFillHome } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine } from "react-icons/ri";
import { FiRadio, FiCode } from "react-icons/fi";
import { FiTool, FiSmile } from "react-icons/fi";

export const categories = [
    { name: "New",id:1 ,icon: <AiFillHome />, type: "home" },
    { name: "Trending",id:2, icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music",id:3 ,icon: <CgMusicNote />, type: "category" },
    { name: "Films",id:4 ,icon: <FiFilm />, type: "category" },
    { name: "Live",id:5, icon: <MdLiveTv />, type: "category" },
    { name: "Gaming",id:6, icon: <IoGameControllerSharp />, type: "category" },
    { name: "News",id:7 ,icon: <ImNewspaper />, type: "category" },
    { name: "Sports",id:8, icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning",id:9 ,icon: <RiLightbulbLine />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
        id:10
    },
    { name: "Coding",id:11, icon: <FiCode />, type: "menu" },
    { name: "Podcast",id:12, icon: <FiRadio />, type: "menu" },
    { name: "Comedy",id:13 ,icon: <FiSmile />, type: "menu" },
    { name: "Technology",id:14, icon: <FiTool />, type: "menu" },
];