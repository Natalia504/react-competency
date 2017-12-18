update shop
set item_name = $1
    item_price=$2
where id=$3
returning *;