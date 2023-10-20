import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { tokens } from "../../theme";
import { useState } from "react";
import Header from "../../components/Header";
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  formatDate,
} from "@fullcalendar/core/index.js";

const Calendar = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  function handleDateClick(selected: DateSelectArg): void {
    const title = prompt("Please enter a new title for your event:");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      console.log(selected);
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  }

  function handleEventClick(selected: EventClickArg): void {
    if (
      window.confirm(
        `Are you sure you want to delte the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  }

  function handleEventSet(events: EventApi[]): void {
    setCurrentEvents(events);
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box display={"flex"} justifyContent={"space-between"}>
        {/*CALENDAR SIDEBAR*/}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius={"4px"}
        >
          <Typography variant="h5"> Events</Typography>
          <List>
            {currentEvents.map(
              (event: EventApi) =>
                event.start !== null && (
                  <ListItem
                    key={event.id}
                    sx={{
                      backgroundColor: colors.greenAccent[500],
                      margin: "10px 0",
                      borderRadius: "2px",
                    }}
                  >
                    <ListItemText
                      primary={event.title}
                      secondary={
                        <Typography>
                          {formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </Typography>
                      }
                    ></ListItemText>
                  </ListItem>
                )
            )}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={handleEventSet}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2023-10-22" },
              { id: "4321", title: "Timed Event", date: "2023-10-29" },
            ]}
          ></FullCalendar>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
