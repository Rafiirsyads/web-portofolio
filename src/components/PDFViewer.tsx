"use client";
import { motion, AnimatePresence } from 'framer-motion';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
  downloadFileName?: string;
  type?: 'resume' | 'document' | 'prd';
}

export default function PDFViewer({ 
  isOpen, 
  onClose, 
  pdfUrl, 
  title,
  downloadFileName,
  type = 'document'
}: PDFViewerProps) {
  // Dynamic title based on type or custom title
  const getTitle = () => {
    if (title) return title;
    
    switch (type) {
      case 'resume':
        return 'Resume - Rafi Irsyad Saharso';
      case 'prd':
        return 'Product Requirements Document';
      default:
        return 'Document Viewer';
    }
  };

  // Dynamic download filename
  const getDownloadFileName = () => {
    if (downloadFileName) return downloadFileName;
    
    switch (type) {
      case 'resume':
        return 'CV - Rafi Irsyad Saharso.pdf';
      case 'prd':
        return 'PRD_Document.pdf';
      default:
        return 'document.pdf';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">{getTitle()}</h3>
              
              <div className="flex items-center gap-4">
                {/* Download Button */}
                <a
                  href={pdfUrl}
                  download={getDownloadFileName()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </a>

                {/* Open in New Tab */}
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Tab
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Content dengan iframe */}
            <div className="h-[calc(100%-80px)]">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
                className="w-full h-full border-0"
                title={getTitle()}
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}