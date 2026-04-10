import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Upload, FileText, Clock } from "lucide-react";
import { UploadInfo } from "../data/poolStockData";

interface UploadCardProps {
  title: string;
  upload: UploadInfo;
  type: 'asm' | 'dealer';
}

export function UploadCard({ title, upload, type }: UploadCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'uploaded':
        return 'bg-[#10B981] text-white';
      case 'pending':
        return 'bg-[#F59E0B] text-white';
      case 'updated':
        return 'bg-[#0285FF] text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <Card className="p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0285FF]/30">
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-[#0285FF] rounded-full"></div>
            <h3 className="text-lg text-gray-900">{title}</h3>
          </div>
          <Badge className={getStatusColor(upload.status)}>
            {upload.status.charAt(0).toUpperCase() + upload.status.slice(1)}
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <div className="text-sm text-gray-500 w-32">
              {type === 'asm' ? 'ASM Name' : 'VNA Name'}:
            </div>
            <div className="text-sm text-gray-900 flex-1">{upload.name}</div>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="text-sm text-gray-500 w-32">Last Uploaded:</div>
            <div className="text-sm text-gray-900 flex-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {upload.uploadTime}
            </div>
          </div>
          
          {/* <div className="flex items-start gap-2">
            <div className="text-sm text-gray-500 w-32">File Name:</div>
            <div className="text-sm text-gray-900 flex-1 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              {upload.fileName}
            </div>
          </div> */}
          
          <div className="flex items-start gap-2">
            <div className="text-sm text-gray-500 w-32">Total Records:</div>
            <div className="text-sm text-gray-900 flex-1">
              {upload.totalRecords.toLocaleString()}
            </div>
          </div>
        </div>
        
        {/* <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Upload className="w-4 h-4 mr-1" />
            Replace File
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            View Summary
          </Button>
        </div> */}
      </div>
    </Card>
  );
}