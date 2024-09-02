import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, Input} from "@nextui-org/react";
import { SearchIcon } from "../components/SearchIcon";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export interface User {
    position: number,
    points: number,
    player: string,
    id: string
}

const TableView = ({users, columns=["position", "player", "points"]} : {users: User[], columns?: string[]}) => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [filterValue, setFilterValue] = React.useState("");
    const [rowsPerPage, setRowsPerPage] = useState(0);

    useEffect(() => {
        let topContentHeight = parseInt(getComputedStyle(document.getElementsByClassName('topContent')[0]).height.split("px")[0]);
        setRowsPerPage(Math.floor((window.innerHeight - topContentHeight*2) / 60))
    }, [])
    
    useEffect(() => {
        setPages(Math.ceil(users.length / rowsPerPage))
    }, [rowsPerPage])

    const hasSearchFilter = Boolean(filterValue);
    const filteredUsers = React.useMemo(() => {
        let filteredUsers = [...users];

        if (hasSearchFilter) {
        filteredUsers = filteredUsers.filter((user) =>
            user.player.toLowerCase().startsWith(filterValue.toLowerCase()),
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

    function toTitleCase(str: string) {
        return str.replace(
          /\w\S*/g,
          text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
        );
      }
      

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
        <Table 
            className="w-full items-center"
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
            wrapper: "min-h-[222px] sm:max-w-[100%]",
            }}
        >
            <TableHeader>
                {columns.map(column => (

                    <TableColumn key={column}>{toTitleCase(column)}</TableColumn>
                ))}
            </TableHeader>
            <TableBody items={items}>
            {(item: User) => (
                <TableRow key={item.player}>
                {(columnKey) => {
                    if (columnKey == "player") {
                        return (
                            <TableCell>
                                <Link href={`https://trackmania.io/#/player/${item.id}`} target="_blank">
                                    {getKeyValue(item, columnKey)}
                                </Link>
                            </TableCell>
                        )
                    } else {
                        return (
                            <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                        )
                    }
                }}
                </TableRow>
            )}
            </TableBody>
        </Table>
      );
}

export default TableView;