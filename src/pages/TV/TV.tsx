import { tvapi } from "src/utils/api";
import React, { useCallback, useEffect, useState } from "react";
import { TvStateTypes } from "./TvTypes";
import styled from "styled-components";
import { Loader, Message, Section } from "src/components";
import Poster from "src/components/Poster";

const TV = () => {
  const [tvState, setTvState] = useState<TvStateTypes>({
    topRated: null,
    popular: null,
    airingToday: null,
    error: "",
    loading: true,
  });

  const fetchData = useCallback(async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvapi.topRated();
      const {
        data: { results: popular },
      } = await tvapi.popular();
      const {
        data: { results: airingToday },
      } = await tvapi.airingToday();
      setTvState({
        ...tvState,
        topRated,
        popular,
        airingToday,
      });
    } catch {
      setTvState({
        ...tvState,
        error: "Can't find movies information.",
      });
    } finally {
      setTvState({
        ...tvState,
        loading: false,
      });
    }
  }, [tvState]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { loading, topRated, popular, airingToday, error } = tvState;

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popluar Shows">
          {popular.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );
};

export default TV;

const Container = styled.div`
  padding: 0px 20px;
  margin-top: 20px;
`;
