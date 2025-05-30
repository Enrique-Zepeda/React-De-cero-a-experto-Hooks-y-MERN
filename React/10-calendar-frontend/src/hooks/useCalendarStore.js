import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO Update event
    try {
      if (calendarEvent.id) {
        //Actualizando
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }
      // Creando
      const { data } = await calendarApi.post("/events", calendarEvent);
      // console.log({ data });
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", error.response.data.msg, "error");
    }
  };

  const startDeletingEvent = async () => {
    // console.log(activeEvent.id);
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);
      await dispatch(onDeleteEvent());
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const events = convertEventsToDateEvents(data.eventos);
      dispatch(onLoadEvent(events));
      // console.log(events);
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  return {
    // *Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    // *Metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents,
  };
};
