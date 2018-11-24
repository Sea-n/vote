<?php
$data = file_get_contents('http://referendum.2018.nat.gov.tw/pc/zh_TW/00/00000000000000000.html');

preg_match_all('#<tr class="trT">[^<]+<td>([^>]+)</td>[^<]+<td>([^>]+)</td>[^<]+<td>([^>]+)</td>[^<]+<td>([^>]+)</td>[^<]+</tr>#', $data, $matches);

$cnt = $matches[1];

for ($i=0; $i<10; $i++)
	$cnt[$i] = intval(str_replace(',', '', $cnt[$i]));

preg_match('#<tr class="trT">[^<]+<td .*?>[^>]+</td>[^<]*<td .*?>([^>]+)</td>#', $data, $matches);
$total = intval(str_replace(',', '', $matches[1]));

$cnt[] = $total;

preg_match('#:&nbsp;([0-9,]+)/([0-9,]+)&nbsp;#', $data, $matches);
$cnt[] = intval(str_replace(',', '', $matches[1]));
$cnt[] = intval(str_replace(',', '', $matches[2]));

echo json_encode($cnt, JSON_PRETTY_PRINT);

$cnt = json_encode($cnt);

file_put_contents('data.json', $cnt);
