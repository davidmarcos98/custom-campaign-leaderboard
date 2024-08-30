import DefaultLayout from "@/layouts/default";
import data from "./players.json"
import data2 from "./results.json"

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, Input} from "@nextui-org/react";
import { SearchIcon } from "../components/SearchIcon";
import React, { useEffect, useState } from "react";

interface User {
  position: number,
  points: number,
  name: string
}
const users: User[] = []

for (let key of Object.keys(data)) {
  users.push({position: 0, points: data[key as keyof typeof data], name: key})
}

users.sort((a: User, b: User) => b.points - a.points);
users.forEach((user: User, index: number) => {
  user.position = index + 1;
})

export default function IndexPage() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [filterValue, setFilterValue] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = useState(0);

  useEffect(() => {
    let topContentHeight = parseInt(getComputedStyle(document.getElementsByClassName('topContent')[0]).height.split("px")[0]);
    setRowsPerPage(Math.floor((window.innerHeight - topContentHeight*2) / 60))
    setPages(Math.ceil(users.length / rowsPerPage))
  }, [])

  const hasSearchFilter = Boolean(filterValue);
  const filteredUsers = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().startsWith(filterValue.toLowerCase()),
      );
    }

    return filteredUsers;
  }, [users, filterValue]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredUsers.slice(start, end);
  }, [page, filteredUsers, rowsPerPage])

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 topContent">
        <div className="flex justify-between gap-3 items-center">
          <span className="font-bold text-xl text-medium">&nbsp;Leaderboard</span>
          <Input
            isClearable
            className="w-full sm:max-w-[60%]"
            placeholder="Search by username..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
      </div>
    );
  }, [
    filterValue,
    onSearchChange,
    users.length,
    hasSearchFilter,
  ]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
        <Table 
          className="items-center"
          aria-label="Example table with client side pagination"
          topContent={topContent}
          isStriped
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page: any) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: "min-h-[222px] sm:max-w-[50%]",
          }}
        >
          <TableHeader>
            <TableColumn key="position">Position</TableColumn>
            <TableColumn key="name">Player</TableColumn>
            <TableColumn key="points">Points</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item: User) => (
              <TableRow key={item.name}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </DefaultLayout>
  );
}
