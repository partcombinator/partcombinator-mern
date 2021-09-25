import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

export default function CalendarPage() {
  const events = [{ title: "today's event", date: new Date() }];
  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Calendar</h1>
        <div id="calendar"></div>

        <button className="btn btn-warning btn-icon-split">
          <span className="icon text-white-50">
            <i className="fas fa-stream"></i>
          </span>
        </button>
      </div>

      <row>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events}
        />
      </row>
    </AdminLayout>
  );
}
