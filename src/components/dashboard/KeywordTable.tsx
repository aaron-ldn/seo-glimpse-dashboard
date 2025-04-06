
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Keyword {
  term: string;
  position: number;
  previousPosition: number;
  volume: number;
  difficulty: "easy" | "medium" | "hard";
}

interface KeywordTableProps {
  keywords: Keyword[];
}

export function KeywordTable({ keywords }: KeywordTableProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-50 text-green-700 hover:bg-green-100";
      case "medium":
        return "bg-yellow-50 text-yellow-700 hover:bg-yellow-100";
      case "hard":
        return "bg-red-50 text-red-700 hover:bg-red-100";
      default:
        return "bg-gray-50 text-gray-700 hover:bg-gray-100";
    }
  };

  const getPositionChange = (current: number, previous: number) => {
    const diff = previous - current;
    if (diff > 0) {
      return (
        <div className="flex items-center gap-1 text-green-600">
          <ArrowUp className="h-4 w-4" />
          <span>{diff}</span>
        </div>
      );
    } else if (diff < 0) {
      return (
        <div className="flex items-center gap-1 text-red-600">
          <ArrowDown className="h-4 w-4" />
          <span>{Math.abs(diff)}</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1 text-gray-400">
        <Minus className="h-4 w-4" />
        <span>0</span>
      </div>
    );
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Keyword</TableHead>
            <TableHead className="w-[100px] text-right">Position</TableHead>
            <TableHead className="w-[100px] text-right">Change</TableHead>
            <TableHead className="w-[100px] text-right">Volume</TableHead>
            <TableHead className="w-[120px] text-right">Difficulty</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {keywords.map((keyword) => (
            <TableRow key={keyword.term}>
              <TableCell className="font-medium">{keyword.term}</TableCell>
              <TableCell className="text-right">{keyword.position}</TableCell>
              <TableCell className="text-right">
                {getPositionChange(keyword.position, keyword.previousPosition)}
              </TableCell>
              <TableCell className="text-right">{keyword.volume.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <Badge variant="secondary" className={cn(getDifficultyColor(keyword.difficulty))}>
                  {keyword.difficulty}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
