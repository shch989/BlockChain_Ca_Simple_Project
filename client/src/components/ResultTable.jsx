import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  margin: 20px auto;
  border-collapse: collapse;
`;

const Th = styled.th`
  border-bottom: 2px solid #333;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const FirstRowTr = styled.tr`
  background-color: #f0f0f0;
`;

const FirstColumnTd = styled.td`
  max-width: 30%;
  border-bottom: 1px solid #ddd;
  border-right: 2px solid #333; 
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ResultTable = (props) => {
  return (
    <Table>
      <thead>
        <FirstRowTr>
          <Th></Th>
          <Th>Value</Th>
        </FirstRowTr>
      </thead>
      <tbody>
        <TableRow>
          <FirstColumnTd>RESULT</FirstColumnTd>
          <Td>{props.result}</Td>
        </TableRow>
        <TableRow>
          <FirstColumnTd>Message</FirstColumnTd>
          <Td>{props.message}</Td>
        </TableRow>
      </tbody>
    </Table>
  );
};

export default ResultTable;