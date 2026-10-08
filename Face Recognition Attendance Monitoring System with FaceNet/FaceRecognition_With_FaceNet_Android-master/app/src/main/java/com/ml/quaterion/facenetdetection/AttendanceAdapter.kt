package com.ml.quaterion.facenetdetection

import android.graphics.Color
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class AttendanceAdapter(private val attendanceData: Map<String, Boolean>) : RecyclerView.Adapter<AttendanceAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_attendance, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val studentName = attendanceData.keys.toList()[position]
        val isPresent = attendanceData.getValue(studentName)

        holder.nameTextView.text = studentName
        holder.statusTextView.text = if (isPresent) "Present" else "Absent"

        // Set text color based on attendance status
        val textColor = if (isPresent) Color.GREEN else Color.RED
        holder.statusTextView.setTextColor(textColor)
        holder.nameTextView.setTextColor(textColor)
    }

    override fun getItemCount(): Int {
        return attendanceData.size
    }

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val nameTextView: TextView = itemView.findViewById(R.id.nameTextView)
        val statusTextView: TextView = itemView.findViewById(R.id.statusTextView)
    }
}

