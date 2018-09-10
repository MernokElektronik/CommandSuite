import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapItem } from '../_models/mapItem';
import { Unit } from '../_models/unit';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';

const Threats: MapItem[] = [
    new MapItem({
        'UID': 111,
        'VID': 111,
        'SystemType': 'Commander1xx',
        'Type': 'Standard excavator',
        'Name': 'Unit111',
        'Group': 'Mernok',
        'Site': 'Mernok HQ',
        'Area': 'Workshop',
        'FirmwareVer': '1',
        'DateLastReceived': 1533637442,
    }, 1533637442, -258891235, 281509105, [
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 12, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 76, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 351, 'Heading': 21820, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258885880, 'LON': 281514333 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 12, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 48, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 267, 'Heading': 21743, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258888134, 'LON': 281512407 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 1, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 24, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 214, 'Heading': 21323, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258889789, 'LON': 281511028 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 1, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 19, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 198, 'Heading': 20386, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258890385, 'LON': 281510686 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 16, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 182, 'Heading': 20070, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258890694, 'LON': 281510569 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 3, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 10, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 175, 'Heading': 23220, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891477, 'LON': 281510016 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 10, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 156, 'Heading': 23220, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891477, 'LON': 281510016 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 3, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 7, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 156, 'Heading': 23220, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891477, 'LON': 281510016 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 1, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 7, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 130, 'Heading': 26666, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891599, 'LON': 281509609 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 5, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 130, 'Heading': 26666, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891599, 'LON': 281509609 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 3, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 4, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 130, 'Heading': 26666, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891599, 'LON': 281509609 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 4, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 142, 'Heading': 30008, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891508, 'LON': 281509148 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 3, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 3, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 142, 'Heading': 30008, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891508, 'LON': 281509148 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 4, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 2, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 142, 'Heading': 30008, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891508, 'LON': 281509148 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 5, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 2, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 143, 'Heading': -31627, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891222, 'LON': 281508912 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 4, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 2, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 143, 'Heading': -31627, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891222, 'LON': 281508912 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 5, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 3, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 143, 'Heading': -31627, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891222, 'LON': 281508912 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 6, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 4, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 143, 'Heading': -31627, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891222, 'LON': 281508912 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 5, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 5, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 143, 'Heading': 1693, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258890875, 'LON': 281508922 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 5, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 20, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 283, 'Heading': 4939, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258889728, 'LON': 281510175 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 25, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 283, 'Heading': 4939, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258889728, 'LON': 281510175 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 51, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 335, 'Heading': 3903, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258888154, 'LON': 281511770 }
        ]),
    new MapItem({
        'UID': 111,
        'VID': 111,
        'SystemType': 'Commander1xx',
        'Type': 'Standard excavator',
        'Name': 'Unit111',
        'Group': 'Mernok',
        'Site': 'Mernok HQ',
        'Area': 'Workshop',
        'FirmwareVer': '1',
        'DateLastReceived': 1533637442,
    },
        1533634862,
        -258850062,
        281612591,
        [
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 12, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 77, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 394, 'Heading': 9728, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258847948, 'LON': 281604671 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 1, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 54, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 289, 'Heading': 9692, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258848229, 'LON': 281607337 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 1, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 49, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 207, 'Heading': 9849, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258848311, 'LON': 281608190 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 1, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 19, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 171, 'Heading': 9531, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258848705, 'LON': 281611158 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 19, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 171, 'Heading': 9531, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258848705, 'LON': 281611158 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 3, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 13, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 231, 'Heading': 9420, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258848825, 'LON': 281612586 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 4, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 15, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 233, 'Heading': 9457, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258848857, 'LON': 281613056 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 5, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 20, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 257, 'Heading': 9622, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258848948, 'LON': 281613950 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 5, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 50, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 266, 'Heading': 10517, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258849576, 'LON': 281617386 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 74, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 205, 'Heading': 10383, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258850260, 'LON': 281619964 }
        ]
    ),

    new MapItem({
        'UID': 111,
        'VID': 111,
        'SystemType': 'Commander1xx',
        'Type': 'Standard excavator',
        'Name': 'Unit111',
        'Group': 'Mernok',
        'Site': 'Mernok HQ',
        'Area': 'Workshop',
        'FirmwareVer': '1',
        'DateLastReceived': 1533637442,
    },
        1533641525,
        -258832283,
        281635504,
        [
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 1, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 79, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 222, 'Heading': 32266, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258839386, 'LON': 281635666 },
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 1, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 49, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 221, 'Heading': -29657, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258836582, 'LON': 281634618 },
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 12, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 48, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 221, 'Heading': -29657, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258836582, 'LON': 281634618 },
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 12, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 19, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 226, 'Heading': 1095, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258833890, 'LON': 281635077 },
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 1, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 4, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 231, 'Heading': 1058, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258832535, 'LON': 281635353 },
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 3, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 1, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 232, 'Heading': 1068, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258832395, 'LON': 281635382 },
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 5, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 2, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 232, 'Heading': 1068, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258832395, 'LON': 281635382 },
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 6, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 5, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 232, 'Heading': 1097, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258831851, 'LON': 281635502 },
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 21, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 240, 'Heading': 1070, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258830445, 'LON': 281635784 },
            { 'Threat_BID': 9, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 51, 'Threat_Heading': 0, 'Threat_LAT': -258832283, 'Threat_LON': 281635504, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 246, 'Heading': 1179, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258828261, 'LON': 281636275 }
        ]
    ),

    new MapItem({
        'UID': 101,
        'VID': 101,
        'SystemType': 'Commander1xx',
        'Type': 'Standard excavator',
        'Name': 'Unit101',
        'Group': 'Mernok',
        'Site': 'Mernok HQ',
        'Area': 'Workshop',
        'FirmwareVer': '1',
        'DateLastReceived': 1533637442,
    },
        1533648003,
        -258850062,
        281612591,
        [
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 12, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 78, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 315, 'Heading': 27981, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258851702, 'LON': 281620743 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 12, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 49, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 340, 'Heading': 27912, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258851151, 'LON': 281617545 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 12, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 19, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 341, 'Heading': 28058, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258850625, 'LON': 281614461 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 1, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 7, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 339, 'Heading': 28178, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258850443, 'LON': 281613569 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 2, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 339, 'Heading': 28178, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258850443, 'LON': 281613569 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 4, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 2, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 326, 'Heading': 28197, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258850262, 'LON': 281612709 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 5, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 3, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 326, 'Heading': 28197, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258850262, 'LON': 281612709 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 6, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 10, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 309, 'Heading': 28172, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258850101, 'LON': 281611906 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 21, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 287, 'Heading': 28102, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258849959, 'LON': 281611188 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 36, 'Threat_Sector': 6, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 19, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 272, 'Heading': 28226, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258849831, 'LON': 281610503 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 23, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 266, 'Heading': 28350, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258849777, 'LON': 281610234 },
            { 'Threat_BID': 10, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 59, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 50, 'Threat_Heading': 0, 'Threat_LAT': -258850062, 'Threat_LON': 281612591, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 312, 'Heading': 28260, 'Accuaracy': 1, 'Scenario': 255, 'Orientation': 255, 'LAT': -258849247, 'LON': 281607604 }
        ]
    ),

    new MapItem({
        'UID': 101,
        'VID': 101,
        'SystemType': 'Commander1xx',
        'Type': 'Standard excavator',
        'Name': 'Unit101',
        'Group': 'Mernok',
        'Site': 'Mernok HQ',
        'Area': 'Workshop',
        'FirmwareVer': '1',
        'DateLastReceived': 1533637442,
    },
        1533645145,
        -258891235,
        281509105,
        [
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 12, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 78, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 410, 'Heading': 21718, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258885610, 'LON': 281514700 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 12, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 48, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 338, 'Heading': 21740, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258887687, 'LON': 281512856 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 1, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 24, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 197, 'Heading': 21682, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258889683, 'LON': 281511161 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 1, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 19, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 160, 'Heading': 20493, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258890434, 'LON': 281510684 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 17, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 166, 'Heading': 20122, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258890663, 'LON': 281510578 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 3, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 12, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 157, 'Heading': 20711, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891338, 'LON': 281510278 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 10, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 130, 'Heading': 23848, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891670, 'LON': 281509929 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 1, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 7, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 92, 'Heading': 28010, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891717, 'LON': 281509548 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 6, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 92, 'Heading': 28010, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891717, 'LON': 281509548 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 1, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 5, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 95, 'Heading': 30602, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891643, 'LON': 281509263 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 2, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 3, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 90, 'Heading': 31250, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891612, 'LON': 281509226 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 3, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 3, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 90, 'Heading': 31250, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891612, 'LON': 281509226 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 4, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 2, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 119, 'Heading': -30707, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891291, 'LON': 281508964 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 3, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 2, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 119, 'Heading': -30707, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891291, 'LON': 281508964 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 5, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 3, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 119, 'Heading': -30707, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891291, 'LON': 281508964 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 6, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 4, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 119, 'Heading': -30707, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258891291, 'LON': 281508964 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 5, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 4, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 138, 'Heading': 2588, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258890907, 'LON': 281508989 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 6, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 8, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 138, 'Heading': 2588, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258890907, 'LON': 281508989 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 5, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 8, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 169, 'Heading': 4987, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258890556, 'LON': 281509257 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 36, 'Threat_Sector': 6, 'Threat_Zone': 3, 'Threat_Speed': 0, 'Threat_Distance': 19, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 256, 'Heading': 4784, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258889860, 'LON': 281510198 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 2, 'Threat_Speed': 0, 'Threat_Distance': 21, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 256, 'Heading': 4784, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258889860, 'LON': 281510198 },
            { 'Threat_BID': 1, 'Threat_Kind': 6, 'Threat_Group': 255, 'Threat_Type': 15, 'Threat_Width': 6, 'Threat_Sector': 6, 'Threat_Zone': 1, 'Threat_Speed': 0, 'Threat_Distance': 52, 'Threat_Heading': 0, 'Threat_LAT': -258891235, 'Threat_LON': 281509105, 'Threat_Acc': 0, 'Threat_Bat_V': 255, 'Threat_Ext_Pow': 255, 'Threat_RF_RSSI': 255, 'Threat_Display_Priority': 1, 'Speed': 322, 'Heading': 3871, 'Accuaracy': 2, 'Scenario': 255, 'Orientation': 255, 'LAT': -258887850, 'LON': 281512173 }]
    )
];

@Injectable()
export class ThreatsService {
    getThreats() { 
        return of(Threats); }

    getThreatsByUnit(unitId: number) {
        return of(Threats.filter(e => e.unit.UID == unitId));
    }

    getUnits() {
        var mapItems: MapItem[] = [];
        for (var i  = 0; i < Threats.length; i++)
        {
            var threat = Threats[i];
            if(mapItems.map(e => e.unit.UID).indexOf(threat.unit.UID) == -1)
            {
                var merged = [].concat.apply([], Threats.filter(d => d.unit.UID == threat.unit.UID).map(f => f.points));
                mapItems.push(new MapItem(
                    threat.unit,
                    threat.timestamp,
                    threat.center_LAT,
                    threat.center_LON,
                    merged
                ));
            }
        }
        return of(mapItems);
    }

    getThreatsByUnitSector(unitID: number, angle: number, distance: number) {
        return of(Threats.filter(e => e.unit.UID == unitID && e.points.filter(p => p.Threat_Zone == distance+1 && p.Threat_Sector == angle+1).length > 0))
    }

    getThreatsBySector(angle: number, distance: number) {
        return of(Threats.filter(e => e.points.filter(p => p.Threat_Zone == distance+1 && p.Threat_Sector == angle+1).length > 0))
    }

    getThreatByUnitBIDTimestamp(unitID: number, BID: number, Timestamp: number){
        return of(Threats.filter(e => e.unit.UID == unitID && e.timestamp == Timestamp && e.points.filter(p => p.Threat_BID == BID).length > 0))
    }

    // getThreatsBySector(zone: number, sector: number) {
    //     return this.getThreats().pipe(
    //         map(e => e.find(ee => ee.points.find == id))
    //     );
    // }
}