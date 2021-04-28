import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchItem } from "./SearchItem";
import Skeleton from "@material-ui/lab/Skeleton";

export class SearchResult extends React.Component {
  state = { tripSchedules: [] };
  loading = false;

  search = async () => {
    let params = JSON.parse(localStorage.getItem("values"));
    this.loading= true;
    const result = await axios.get(
      "http://localhost:8084/train/trip-schedules/get-trip-schedules-by-date-and-stations/" +
        params.from +
        "/" +
        params.to +
        "/" +
        params.date,
      {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmFyd2FsQGdtYWlsLmNvbSIsImV4cCI6MTYxOTY2MTg1NywiaWF0IjoxNjE5NTc1NDU3LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl19.O7qOKen-ug9hiagTnd1ULPCbhAjzFLoYt-KQ_tdn9P0",
        },
      }
    );
    this.loading=false;
    this.setState({ tripSchedules: result.data });
    console.log(result.data);
    console.log(this.state.tripSchedules);
  };
  componentDidMount() {
    this.search();
    console.log("diMount");
  }

  render() {
    return (
      <div style={{ width: "90%", margin: "auto" }}>
        {this.loading ? (
          <Skeleton animation="wave" />
        ) : (
          this.state.tripSchedules.map((item) => {
            return <SearchItem tripSchedule={item} />;
          })
        )}
      </div>
    );
  }
}
