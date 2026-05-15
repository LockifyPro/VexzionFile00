export type ToolCategory='pdf'|'image'|'document'|'compression'|'developer'|'audio'|'video'|'ai';
export type Tool={slug:string;title:string;description:string;category:ToolCategory;supportedFormats:string[];limits:string;implemented:boolean;free:boolean;related:string[]};
