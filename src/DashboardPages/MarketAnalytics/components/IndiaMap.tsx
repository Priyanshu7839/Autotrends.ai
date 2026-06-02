import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { geoMercator, geoPath } from "d3-geo";
import type { GeoPermissibleObjects } from "d3-geo";

import { StateHoverCard } from "./StateHoverCard";
import { stateData, getColorForSales } from "../data/stateData";

const INDIA_TOPO_JSON =
  "https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson";

export function IndiaMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getStateId = (properties: any): string | null => {
    const stName = properties.ST_NM || properties.NAME_1 || properties.name;

    const stateNameToId: Record<string, string> = {
      "Andaman & Nicobar": "IN-AN",
      "Andhra Pradesh": "IN-AP",
      "Arunachal Pradesh": "IN-AR",
      "Assam": "IN-AS",
      "Bihar": "IN-BR",
      "Chandigarh": "IN-CH",
      "Chhattisgarh": "IN-CT",
      "Delhi": "IN-DL",
      "Goa": "IN-GA",
      "Gujarat": "IN-GJ",
      "Haryana": "IN-HR",
      "Himachal Pradesh": "IN-HP",
      "Jammu & Kashmir": "IN-JK",
      "Jharkhand": "IN-JH",
      "Karnataka": "IN-KA",
      "Kerala": "IN-KL",
      "Ladakh": "IN-LA",
      "Lakshadweep": "IN-LD",
      "Madhya Pradesh": "IN-MP",
      "Maharashtra": "IN-MH",
      "Manipur": "IN-MN",
      "Meghalaya": "IN-ML",
      "Mizoram": "IN-MZ",
      "Nagaland": "IN-NL",
      "Odisha": "IN-OR",
      "Puducherry": "IN-PY",
      "Punjab": "IN-PB",
      "Rajasthan": "IN-RJ",
      "Sikkim": "IN-SK",
      "Tamil Nadu": "IN-TN",
      "Telangana": "IN-TG",
      "Tripura": "IN-TR",
      "Uttar Pradesh": "IN-UP",
      "Uttarakhand": "IN-UT",
      "West Bengal": "IN-WB",
      "Dadra & Nagar Haveli & Daman & Diu": "IN-DN",
    };

    return stateNameToId[stName] || null;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0 || dimensions.height === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const projection = geoMercator()
      .scale(950)
      .center([82, 23])
      .translate([dimensions.width / 2, dimensions.height / 2]);

    const pathGenerator = geoPath().projection(projection);

    d3.json(INDIA_TOPO_JSON).then((data) => {
      const features = (data as any).features;

      svg
        .append("g")
        .selectAll("path")
        .data(features)
        .enter()
        .append("path")
        .attr("d", (d) => pathGenerator(d as GeoPermissibleObjects))
        .attr("class", "state-path")
        .attr("fill", (d: any) => {
          const stateId = getStateId(d.properties);
          const stateInfo = stateId ? stateData[stateId] : null;
          return stateInfo ? getColorForSales(stateInfo.totalSales) : "#f0f0f0";
        })
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 0.75)
        .style("cursor", (d: any) => {
          const stateId = getStateId(d.properties);
          return stateId && stateData[stateId] ? "pointer" : "default";
        })
        .on("mouseenter", function (event, d: any) {
          const stateId = getStateId(d.properties);
          const stateInfo = stateId ? stateData[stateId] : null;

          if (stateId && stateInfo) {
            setHoveredState(stateId);
            d3.select(this)
              .attr("fill", "#0b85ff")
              .attr("stroke-width", 1.5);
          }
        })
        .on("mouseleave", function (event, d: any) {
          setHoveredState(null);
          const stateId = getStateId(d.properties);
          const stateInfo = stateId ? stateData[stateId] : null;
          const fillColor = stateInfo
            ? getColorForSales(stateInfo.totalSales)
            : "#f0f0f0";

          d3.select(this)
            .attr("fill", fillColor)
            .attr("stroke-width", 0.75);
        });
    });
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      onMouseMove={handleMouseMove}
    >
      <svg
        ref={svgRef}
        className="w-full h-full"
        style={{ transition: "all 0.2s ease-in-out" }}
      />

      <div>
        {hoveredState && stateData[hoveredState] && (
          <StateHoverCard
            stateName={stateData[hoveredState].name}
            totalSales={stateData[hoveredState].totalSales}
            growth={stateData[hoveredState].growth}
            topBrand={stateData[hoveredState].topBrand}
            topRTO={stateData[hoveredState].topRTO}
            x={mousePos.x}
            y={mousePos.y}
          />
        )}
      </div>
    </div>
  );
}
