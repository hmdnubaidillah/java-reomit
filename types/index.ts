import { StaticImageData } from "next/image";

export interface CarouselHome {
  img: StaticImageData;
}

export interface ArticleCardTypes {
  imgAuthor: StaticImageData;
  author: string;
  date: string;
  category: string;
  title: string;
  contentPreview?: string;
  img: StaticImageData;
  imgAlt: string;
}

export interface ArticleDetail extends ArticleCardTypes {
  content: string;
}

export interface Stats {
  heading: string;
  sub: string;
}

export interface EventCardTypes {
  title: string;
  date: string;
  time: string;
  location: string;
  imgPath: StaticImageData | string;
}

export interface EventCardDetailTypes extends EventCardTypes {
  fullAdress: string;
  decsriptionPreview: string;
  description: string;
  eventShedule: EventScheduleItems[];
  sponsor: string[];
  rincianTambahan?: [{}];
  isGratis: boolean;
}

export interface EventScheduleItems {
  name: string;
  startTime: string;
  endTime: string;
}

export interface CategoryBudayaTypes {
  kuliner: {
    img: any;
    altImg: string;
    title: string;
    content: string;
  }[];

  tradisi: {
    img: any;
    altImg: string;
    title: string;
    content: string;
  }[];

  kesenian: {
    img: any;
    altImg: string;
    title: string;
    content: string;
  }[];
}
