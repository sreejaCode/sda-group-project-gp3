import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useEffect, useState } from "react";
import LectureApi from "../../../api/LectureApi";

export default function LectureCalendar() {
  const localizer = momentLocalizer(moment);
  const [eventList, setEventList] = useState([]);
  const [status, setStatus] = useState(0);

  const getAllLecture = () => {
    LectureApi.getAllLectures().then((res) => {
      let lectureData = [];
      res.data.map((lecture) =>
        lectureData.push(formatDataToEventList(lecture))
      );

      setEventList(lectureData);
    });
  };

  const formatDataToEventList = (data) => {
    let formatedData = {
      id: data.id,
      title: data.title,
      allDay: false,
      start: new Date(moment(data.unlockTime).format("YYYY-MM-DD hh:mm")),
      end: new Date(
        moment(data.unlockTime)
          .add(1, "hours")
          .format("YYYY-MM-DD hh:mm")
      ),
    };
    return formatedData;
  };

  useEffect(() => {
    getAllLecture();
  }, []);

  useEffect(() => {
    eventList.length !== 0 && setStatus(1);
  }, [eventList]);

  // const eventList = [
  //   {
  //     id: 0,
  //     title: "All Day Event very long title",
  //     allDay: true,
  //     start: new Date("2020-12-08"),
  //     end: new Date("2020-12-08"),
  //   },
  //   {
  //     id: 1,
  //     title: "Long Event",
  //     allDay: false,
  //     start: new Date("2020-12-09 15:00"),
  //     end: new Date("2020-12-09 17:00"),
  //   },
  // ];

  function openStudentLecturePage(lectureId) {
    const url = "/lecture/" + lectureId;
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={status === 0 ? [] : eventList}
        timeslots="2"
        defaultView={Views.WEEK}
        onSelectEvent={(event) => openStudentLecturePage(event.id)}
        selectable="true"
        onSelectSlot={(event) => console.log("1event", event)}
        style={{ height: 500 }}
        scrollToTime={new Date(new Date().setHours(7, 0, 0, 0))}
      />
    </div>
  );
}
