"use client";

import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../lib/supabase";

export default function StudioMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const fetchMessages = useCallback(async () => {
    if (!supabase) {
      setError("Supabase URL or Anon Key is missing. Check Vercel Environment Variables.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    const { data, error: fetchError } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      console.error("Error fetching messages:", fetchError);
      setError(fetchError.message);
    } else {
      setMessages(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const filteredMessages = messages.filter((msg) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      (msg.name && msg.name.toLowerCase().includes(term)) ||
      (msg.email && msg.email.toLowerCase().includes(term)) ||
      (msg.phone && msg.phone.toLowerCase().includes(term)) ||
      (msg.message && msg.message.toLowerCase().includes(term))
    );
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.title}>📬 Contact Messages</h1>
          <span style={styles.badge}>{messages.length}</span>
        </div>
        <button
          onClick={fetchMessages}
          disabled={loading}
          style={{
            ...styles.refreshBtn,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "⏳ Refreshing..." : "🔄 Refresh"}
        </button>
      </div>

      {/* Search */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by name, email, phone, or message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* Error State */}
      {error && (
        <div style={styles.errorBox}>
          <strong>⚠️ Error:</strong> {error}
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem" }}>
            Make sure the <code>messages</code> table exists in your Supabase project and RLS policies allow read access.
          </p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div style={styles.loadingBox}>
          <div style={styles.spinner} />
          <p style={{ margin: 0, color: "#71717a" }}>Loading messages...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredMessages.length === 0 && (
        <div style={styles.emptyBox}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📭</div>
          <p style={{ color: "#71717a", fontSize: "1.1rem", margin: 0 }}>
            {searchTerm
              ? "No messages match your search."
              : "No messages yet. They'll appear here when someone submits the contact form."}
          </p>
        </div>
      )}

      {/* Messages Table */}
      {!loading && !error && filteredMessages.length > 0 && (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Email</th>
                <th style={{ ...styles.th, minWidth: "250px" }}>Message</th>
                <th style={styles.th}>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.map((msg, index) => (
                <tr
                  key={msg.id}
                  style={{
                    ...styles.tr,
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa",
                  }}
                >
                  <td style={styles.td}>
                    <span style={styles.nameText}>{msg.name || "—"}</span>
                  </td>
                  <td style={styles.td}>
                    <span style={styles.phoneText}>{msg.phone || "—"}</span>
                  </td>
                  <td style={styles.td}>
                    <a
                      href={`mailto:${msg.email}`}
                      style={styles.emailLink}
                    >
                      {msg.email || "—"}
                    </a>
                  </td>
                  <td style={styles.td}>
                    <p style={styles.messageText}>{msg.message || "—"}</p>
                  </td>
                  <td style={styles.td}>
                    <span style={styles.dateText}>
                      {formatDate(msg.created_at)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    background: "#f8f9fa",
    minHeight: "100vh",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  title: {
    fontSize: "1.75rem",
    fontWeight: "700",
    color: "#18181b",
    margin: 0,
  },
  badge: {
    background: "#d97706",
    color: "white",
    fontSize: "0.8rem",
    fontWeight: "700",
    padding: "0.2rem 0.6rem",
    borderRadius: "999px",
    minWidth: "1.5rem",
    textAlign: "center",
  },
  refreshBtn: {
    background: "#18181b",
    color: "white",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "0.5rem",
    fontWeight: "600",
    fontSize: "0.9rem",
    transition: "all 0.2s",
  },
  searchContainer: {
    marginBottom: "1.5rem",
  },
  searchInput: {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    border: "1px solid #e4e4e7",
    fontSize: "0.95rem",
    outline: "none",
    background: "white",
    boxSizing: "border-box",
  },
  errorBox: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#991b1b",
    padding: "1rem 1.25rem",
    borderRadius: "0.75rem",
    marginBottom: "1.5rem",
  },
  loadingBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 2rem",
    gap: "1rem",
  },
  spinner: {
    width: "2rem",
    height: "2rem",
    border: "3px solid #e4e4e7",
    borderTopColor: "#d97706",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  emptyBox: {
    background: "white",
    padding: "4rem 2rem",
    borderRadius: "1rem",
    textAlign: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    border: "1px solid #e4e4e7",
  },
  tableWrapper: {
    background: "white",
    borderRadius: "1rem",
    overflow: "auto",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    border: "1px solid #e4e4e7",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.9rem",
  },
  th: {
    textAlign: "left",
    padding: "0.85rem 1rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#71717a",
    borderBottom: "2px solid #e4e4e7",
    background: "#fafafa",
    whiteSpace: "nowrap",
  },
  tr: {
    transition: "background 0.15s",
  },
  td: {
    padding: "0.85rem 1rem",
    borderBottom: "1px solid #f4f4f5",
    verticalAlign: "top",
  },
  nameText: {
    fontWeight: "600",
    color: "#18181b",
    whiteSpace: "nowrap",
  },
  phoneText: {
    color: "#3f3f46",
    whiteSpace: "nowrap",
  },
  emailLink: {
    color: "#d97706",
    textDecoration: "none",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  messageText: {
    margin: 0,
    color: "#3f3f46",
    lineHeight: "1.5",
    maxWidth: "350px",
  },
  dateText: {
    color: "#a1a1aa",
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
  },
};
