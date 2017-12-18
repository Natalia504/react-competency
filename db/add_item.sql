insert into shop (
    item_name,
    item_price
)
values (
    $1,
    $2
)
returning *;