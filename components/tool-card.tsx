import Link from 'next/link';
import { Tool } from '@/lib/types';
export function ToolCard({tool}:{tool:Tool}){return <Link href={`/tools/${tool.slug}`} className='rounded-xl border p-4 hover:shadow-sm transition bg-white dark:bg-slate-900'><div className='flex justify-between'><h3 className='font-semibold'>{tool.title}</h3>{!tool.implemented&&<span className='text-xs text-amber-500'>Coming Soon</span>}</div><p className='text-sm text-slate-500 mt-2'>{tool.description}</p></Link>}
