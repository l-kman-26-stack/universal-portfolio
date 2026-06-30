import React from 'react';
import { useEditMode } from '@/lib/edit-mode';
import { cn } from '@/lib/utils';
import { Pencil } from 'lucide-react';

interface EditableProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Editable({ children, className, as: Component = 'span' }: EditableProps) {
  const { isEditMode } = useEditMode();

  return (
    <Component 
      className={cn(
        "relative transition-all duration-200 ease-in-out",
        isEditMode && "border-b-2 border-dashed border-primary/50 cursor-text hover:bg-primary/5 rounded-sm px-1 -mx-1",
        className
      )}
    >
      {children}
      {isEditMode && (
        <span className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full p-0.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <Pencil className="w-2.5 h-2.5" />
        </span>
      )}
    </Component>
  );
}
