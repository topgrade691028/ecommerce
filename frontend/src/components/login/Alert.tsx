import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface AlertProps {
  error: string;
}

export function AlertDestructive({ error }: AlertProps) {
  return (
    <Alert variant="destructive" className="absolute top-4 right-4 z-10 w-48">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
}
