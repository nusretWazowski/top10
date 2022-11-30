import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImageconfig } from '../../hooks/useImageConfig';
import { useSingleFilm } from '../../hooks/useSingleFilm';
import { FetchedShow } from '../../util/types/shows';

const ShowView: React.FC = () => {
  const { id } = useParams<string>();

  const history = useNavigate();

  const show = useSingleFilm<FetchedShow>('tv', id!);

  const imageConfig = useImageconfig();

  return (
    <div>
      <p onClick={() => history(-1)}>{'<'} Go back</p>
      <div>
        <img
          src={`${imageConfig?.images.base_url}${imageConfig?.images.backdrop_sizes[1]}/${show?.backdrop_path}`}
          alt="No preview available"
        />
      </div>
      <div>{show?.name}</div>
      <div>Show overview</div>
      <div>{show?.overview ? show?.overview : 'No overview available'}</div>
    </div>
  );
};

export default ShowView;
