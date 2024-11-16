import React from "react";
interface ColorCellProps {
    name: string;
    size?: number;
    borderRadius?: number;
    extraData?: any;
    className?: string;  // Agregada la propiedad className opcional
    style?: React.CSSProperties;  // Agregada la propiedad style opcional
}
const ColorCell: React.FC<ColorCellProps> = ({
    name,
    extraData,
    size = 40,
    borderRadius = 99,
    className,
    style
}) => {
    const resolveColor = (name: string, extraData?: any) => {
        if (name.includes('{{') && name.includes('}}')) {
            const propertyName: any = name.match(/\{\{(.+?)\}\}/)?.[1];
            console.log(propertyName)
            return extraData?.[propertyName] || name;
        }
        return name;
    };
    return <div className={`precooked-color-cell ${className}`} style={{
        display: "block",
        width: size,
        height: size,
        borderRadius: borderRadius,
        background: resolveColor(name, extraData),
        ...style
    }}></div>;
};

export default ColorCell;
