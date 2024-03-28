import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Calender.css";

const App = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);

    // Load events from local storage on component mount
    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem("events"));
        if (storedEvents) {
            setEvents(storedEvents);
        }
    }, []);

    // Save events to local storage whenever events change
    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events));
    }, [events]);

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const Create_Event_Fun = () => {
        if (selectedDate && eventName) {
            const newEvent = {
                id: new Date().getTime(),
                date: selectedDate,
                title: eventName,
            };
            setEvents([...events, newEvent]);
            setSelectedDate(null);
            setEventName("");
        }
    };

    const Update_Event_Fun = (eventId, newName) => {
        const updatedEvents = events.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updatedEvents);
    };

    const Delete_Event_Fun = (eventId) => {
        const updatedEvents = events.filter((event) => event.id !== eventId);
        setEvents(updatedEvents);
    };

    const tileClassName = ({ date }) => {
        if (events.some((event) => event.date.toDateString() === date.toDateString())) {
            return "event-marked";
        }
        return null;
    };

    return (
        <div className="app1">
            <div className='overlay10'></div>
            <h1 className="top">Event Calendar</h1>
            <div className="container">
                <div className="calendar-container">
                    <Calendar
                        value={selectedDate}
                        onClickDay={Date_Click_Fun}
                        tileClassName={tileClassName}
                    />
                </div>
                <div className="event-container">
                    <div className="event-form">
                        <h2 className="hp"> Create Event </h2>
                        <br></br>
                        {/* Display selected date or today's date */}
                        <p className="pp">
                            {selectedDate ? `Selected Date: ${selectedDate.toDateString()}` : `Today's Date: ${new Date().toDateString()}`}
                            <br></br>
                        </p>
                        <input className="op"
                            type="text"
                            placeholder="Event Name"
                            value={eventName}
                            onChange={Event_Data_Update}
                        />{" "}
                        <button
                            className="create-btn"
                            onClick={Create_Event_Fun}
                        >
                            Add Event{" "}
                        </button>{" "}
                    </div>
                    {events.length > 0 && (
                        <div className="event-list-wrapper">
                            <div className="event-list">
                                <h2 className="ip"> My Event List </h2>{" "}
                                <div className="event-cards">
                                    {events.map((event) => (
                                        <div key={event.id} className="event-card">
                                            <div className="event-card-header">
                                                <span className="event-date">
                                                    {" "}
                                                    {event.date.toDateString()}{" "}
                                                </span>{" "}
                                                <div className="event-actions">
                                                    <button
                                                        className="update-btn"
                                                        onClick={() =>
                                                            Update_Event_Fun(
                                                                event.id,
                                                                prompt(
                                                                    "ENTER NEW TITLE"
                                                                )
                                                            )
                                                        }
                                                    >
                                                        Update Event{" "}
                                                    </button>{" "}
                                                    <button
                                                        className="delete-btn"
                                                        onClick={() =>
                                                            Delete_Event_Fun(
                                                                event.id
                                                            )
                                                        }
                                                    >
                                                        Delete Event{" "}
                                                    </button>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                            <div className="event-card-body">
                                                <p className="event-title">
                                                    {" "}
                                                    {event.title}{" "}
                                                </p>{" "}
                                            </div>{" "}
                                        </div>
                                    ))}
                                </div>{" "}
                            </div>
                        </div>
                    )}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default App;
