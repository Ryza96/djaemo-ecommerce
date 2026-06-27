insert into products
(
    name,
    slug,
    description,
    category,
    type,
    price,
    weight,
    stock,
    thumbnail_url,
    is_preorder,
    is_active,
    display_order
)

values

(
'D''Jaemo Jamur Krispi Balado',
'djaemo-jamur-krispi-balado-72gr',
'Jamur krispi premium rasa Balado.',
'premium',
'single',
14499,
72,
0,
null,
false,
true,
1
),

(
'D''Jaemo Jamur Krispi BBQ',
'djaemo-jamur-krispi-bbq-72gr',
'Jamur krispi premium rasa BBQ.',
'premium',
'single',
14499,
72,
0,
null,
false,
true,
2
),

(
'D''Jaemo Jamur Krispi Pedas Manis',
'djaemo-jamur-krispi-pedas-manis-72gr',
'Jamur krispi premium rasa Pedas Manis.',
'premium',
'single',
14499,
72,
0,
null,
false,
true,
3
),

(
'D''Jaemo Jamur Krispi Original 70 gr',
'djaemo-jamur-krispi-original-70gr',
'Jamur krispi original pre order.',
'pre_order',
'single',
12500,
70,
0,
null,
true,
true,
4
),

(
'D''Jaemo Jamur Krispi Original 120 gr',
'djaemo-jamur-krispi-original-120gr',
'Jamur krispi original pre order.',
'pre_order',
'single',
15000,
120,
0,
null,
true,
true,
5
),

(
'D''Jaemo Jamur Krispi Original 250 gr',
'djaemo-jamur-krispi-original-250gr',
'Jamur krispi original pre order.',
'pre_order',
'single',
32000,
250,
0,
null,
true,
true,
6
),

(
'D''Jaemo Bundling Premium',
'djaemo-bundling-premium',
'Bundling 3 produk premium bebas pilih.',
'bundle',
'bundle',
38900,
null,
0,
null,
false,
true,
7
);