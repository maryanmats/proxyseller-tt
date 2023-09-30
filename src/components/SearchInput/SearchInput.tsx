import TextField from '@mui/material/TextField';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  value: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
}

export const SearchInput: React.FC<Props> = ({ value, setSearchQuery }) => {
  return (
    <TextField
      sx={{ marginBottom: '12px' }}
      id="outlined-basic"
      label="Search by username"
      variant="outlined"
      value={value}
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  );
};
