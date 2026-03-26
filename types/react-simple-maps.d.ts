declare module 'react-simple-maps' {
  import * as React from 'react';

  interface GeographyType {
    rsmKey: string;
    properties: {
      name: string;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotate?: [number, number, number];
      parallels?: [number, number];
      precision?: number;
    };
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: GeographyType[] }) => React.ReactNode;
  }

  interface GeographyProps {
    geography: GeographyType;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    onClick?: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseEnter?: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<SVGPathElement>) => void;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
}
