export interface SortProps {
  lhs: string | number;
  rhs: string | number;
}

export const sortedByAscending = ({ lhs, rhs }: SortProps) => {
  if (lhs < rhs) {
    return -1;
  } else if (lhs > rhs) {
    return 1;
  } else {
    return 0;
  }
};

export const sortedByDescending = ({ lhs, rhs }: SortProps) => {
  if (lhs < rhs) {
    return 1;
  } else if (lhs > rhs) {
    return -1;
  } else {
    return 0;
  }
};
