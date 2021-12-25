import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "61c4a57cdb74a040c1fab437",
      user: "61c1f8508a86c4b251d21bd7",
      title: "Note title",
      description:
        "Note descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNotdescriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNot",
      tag: "tag",
      date: "2021-12-23T16:36:12.114Z",
      __v: 0,
    },
    {
      _id: "61c1f8c08a86c4b251d21bdb",
      user: "61c1f8508a86c4b251d21bd7",
      title: "A very long title, very very long and more",
      description: "Updated description",
      tag: "updated",
      date: "2021-12-21T15:54:40.354Z",
      __v: 0,
    },
    {
      _id: "61c6e0dcae3b1c1993610930",
      user: "61c6def9e6d0ad74c5dd1563",
      title: "Note title",
      description: "Note description",
      tag: "tag",
      date: "2021-12-25T09:14:04.959Z",
      __v: 0,
    },
    {
      _id: "61c6e26bae3b1c1993610934",
      user: "61c6def9e6d0ad74c5dd1563",
      description:
        "No title was provided for this note. The text you're reading is a description. For creating a note title is not mandatory, but description is.",
      tag: "General",
      date: "2021-12-22T09:20:43.932Z",
      __v: 0,
    },
    {
      _id: "61c6e2fbae3b1c1993610938",
      user: "61c6def9e6d0ad74c5dd1563",
      description:
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      tag: "General",
      date: "2021-12-22T09:23:07.672Z",
      __v: 0,
    },
    {
      _id: "61c6e301ae3b1c199361093a",
      user: "61c6def9e6d0ad74c5dd1563",
      title: "Engineering",
      description:
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      tag: "Macapsing",
      date: "2021-12-25T09:23:13.073Z",
      __v: 0,
    },
    {
      _id: "61c6e30aae3b1c199361093c",
      user: "61c6def9e6d0ad74c5dd1563",
      title: "Support",
      description:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      tag: "Rongcheng",
      date: "2021-12-23T09:23:22.708Z",
      __v: 0,
    },
    {
      _id: "61c6e322ae3b1c199361093e",
      user: "61c6def9e6d0ad74c5dd1563",
      title: "Support",
      description:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      tag: "Vitry-le-François",
      date: "2021-12-24T09:23:46.695Z",
      __v: 0,
    },
    {
      _id: "61c6e328ae3b1c1993610940",
      user: "61c6def9e6d0ad74c5dd1563",
      title: "Services",
      description:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      tag: "Lavrica",
      date: "2021-12-23T09:23:52.195Z",
      __v: 0,
    },
    {
      _id: "61c6e32eae3b1c1993610942",
      user: "61c6def9e6d0ad74c5dd1563",
      title: "Marketing",
      description:
        "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      tag: "Bulod",
      date: "2021-12-25T09:23:58.164Z",
      __v: 0,
    },
    {
      _id: "61c6e336ae3b1c1993610944",
      user: "61c6def9e6d0ad74c5dd1563",
      title: "Training",
      description:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      tag: "Maharagama",
      date: "2021-12-24T09:24:06.947Z",
      __v: 0,
    },
    {
      _id: "61c6e33fae3b1c1993610946",
      user: "61c6def9e6d0ad74c5dd1563",
      title: "Legal",
      description:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      tag: "Badāmā",
      date: "2021-12-24T09:24:15.761Z",
      __v: 0,
    },
    {
      _id: "61c6e346ae3b1c1993610948",
      user: "61c6def9e6d0ad74c5dd1563",
      title: "Services",
      description:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      tag: "Isoka",
      date: "2021-12-24T09:24:22.727Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
